module SongsHelper
  
  def strip_javascript(old_lyrics)
    doc = Nokogiri::HTML::DocumentFragment.parse(old_lyrics)
    doc.css('script').remove()
    doc.xpath("//@*[starts-with(name(),'on')]").remove
    doc.to_s
  end
  
  def lyrics_to_html(old_lyrics)
    old_lyrics.strip.gsub(/(\r\n|\n)/) {|match| "<br>"}
  end
  
  def safe_html(old_lyrics)
    html_lyrics = lyrics_to_html(old_lyrics)
    strip_javascript(html_lyrics)
  end
  
end
