module Substitution

  def self.add_anchors(edited_lyrics)
    pattern = /(\[)(.+?)(\])(\()(\d+)(\))/m
    edited_lyrics.gsub(pattern) do |match|

      "<a href=\"/#{$5}\">#{$2}</a>"
    end
  end

end