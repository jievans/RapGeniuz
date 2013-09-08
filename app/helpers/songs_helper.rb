require 'redcarpet'
require 'reverse_markdown'

module SongsHelper
  def markdown(lyrics, options = {})
    renderer = Redcarpet::Render::HTML.new(options)
    markdowner = Redcarpet::Markdown.new(renderer)
    markdowner.render(lyrics).html_safe
  end

  def reverse_markdown(lyrics)
    ReverseMarkdown.parse_element(lyrics)
  end
end
