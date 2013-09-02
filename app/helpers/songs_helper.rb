require 'redcarpet'

module SongsHelper
  def markdown(lyrics)
    renderer = Redcarpet::Render::HTML.new(:hard_wrap => true)
    markdowner = Redcarpet::Markdown.new(renderer)
    markdowner.render(lyrics).html_safe
  end
end
