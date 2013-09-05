module ParsingHelper

  def noko_invalid?(old_lyrics, new_lyrics)

    failure = {}

    illegal = false
    old_doc = Nokogiri::HTML(old_lyrics)
    new_doc = Nokogiri::HTML(new_lyrics)
    old_anchors = old_doc.css("a")
    new_anchors = new_doc.css("a")



    # loop through old anchors
    # check that old anchors match up in every way with new anchors, except in cases where the new anchors have user-ids

    old_anchors.each do |old_node|
      ## see if old anchors deleted
      anchor_id = old_node["data-annotation-id"]
      new_node = new_anchors.at_css("data-annotation-id='#{anchor_id}'")

      if new_node
        old_node.attributes.each do |key, attr_obj|
          unless new_node[key] == attr_obj.value
            failure[:fiddled] = "You messed with the attributes"
          end
        end
        new_anchors.remove(new_node)
      else
        annotation = Annotation.find_by_id(anchor_id)
        unless annotation.user_id == current_user.id
          failure[:deletion] = "You aren't allowed to delete other's annotations."
        end
      end

    end # old_anchors each

    proper_attributes = ["class", "href", "data-annotation-id"]

    new_anchors.each do |anchor|
      current_attributes = anchor.attributes.keys
      unless current_attributes == proper_attributes
        failure[:fiddled] = "You messed with the attributes on a new annotation."
      else
        record = Annotation.find(anchor["data-annotation-id"])
        unless record.user_id == current_user.id
          failure[:other_annotation] = "You can't pull in other's annoations."
        end

        unless attributes_valid?(node)
          failure[:fiddled] = "You messed with the attributes"
        end
      end
    end

    return (failure.empty? ? false : failure)

  end

  def attributes_valid?(node)
     node["class"] == "annotation" && node["href"] == "/annotations/#{node['data-annotation-id']}"
  end

end