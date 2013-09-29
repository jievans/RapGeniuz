require 'redcarpet'
require 'reverse_markdown'
require 'redcarpet_renderers'


module SongsHelper
  
  def strip_javascript(old_lyrics)
    doc = Nokogiri::HTML::DocumentFragment.parse(old_lyrics)
    doc.css('script').remove()
    doc.xpath("//@*[starts-with(name(),'on')]").remove
    doc.to_s
  end
  
  def markdown(lyrics, options = {})
    renderer = Redcarpet::Render::HTML.new(options)
    markdowner = Redcarpet::Markdown.new(renderer)
    markdowner.render(lyrics).html_safe
  end

  def non_block_markdown(lyrics, options = {})
    renderer = Redcarpet::Render::WithoutBlock.new(options)
    markdowner = Redcarpet::Markdown.new(renderer)
    markdowner.render(lyrics).html_safe
  end

  def reverse_markdown(lyrics)
    plain_lyrics = ReverseMarkdown.parse_element(lyrics)

    pattern = /(?<lyric>\[.+?\]\()(?<link>\/\d+)(?<endparen>\))/m

    plain_lyrics.gsub!(pattern) do |match|
      $~[:lyric] + $~[:link][1..-1] + $~[:endparen]
    end

    plain_lyrics
  end

  def make_anchors(edited_lyrics)
    pattern = /(\[)(.+?)(\])(\()(\d+)(\))/m

    edited_lyrics.gsub(pattern) do |match|
      "<a href=\"/#{$2}\">#{$5}</a>"
    end
  end
end
