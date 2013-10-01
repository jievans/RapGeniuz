module ParsingHelper

  def lyrics_invalid?(old_lyrics, new_lyrics)

    failure = {}

    old_doc = Nokogiri::HTML(old_lyrics)
    new_doc = Nokogiri::HTML(new_lyrics)
    old_anchors = old_doc.css("a")
    new_anchors = new_doc.css("a")


    old_anchors.each do |old_node|
      anchor_id = old_node["data-annotation-id"]
      new_node = new_anchors.at_css("a[data-annotation-id='#{anchor_id}']")

      if new_node
        old_node.attributes.each do |key, attr_obj|
          unless new_node[key] == attr_obj.value
            failure[:fiddled] = "You messed with the attributes on an old annotation."
          end
        end
        new_anchors.delete(new_node)
      else
        annotation = Annotation.find_by_id(anchor_id)
        unless annotation.user_id == current_user.id
          failure[:deletion] = "You aren't allowed to delete others' annotations."
        end
      end

    end # old_anchors each

    proper_attributes = ["class", "href", "data-annotation-id"]

    new_anchors.each do |anchor|
      current_attributes = anchor.attributes.keys
      unless current_attributes == proper_attributes
        failure[:fiddled] = "You messed with the attributes on a new annotation."
      else
        record = Annotation.find_by_id(anchor["data-annotation-id"])

        if record
          unless record.user_id == current_user.id
            failure[:other_annotation] = "You can't pull in others' annotations."
          end
        else
          failure[:nonexist_annotation] = "You're trying to link to an annotation that doesn't exist."
        end

        unless attributes_valid?(anchor)
          failure[:fiddled] = "You messed with the attributes"
        end
      end
    end

    return (failure.empty? ? false : failure)

  end

  def attributes_valid?(node)
     node["class"] == "annotation" && node["href"] == "/#{node['data-annotation-id']}"
  end

end