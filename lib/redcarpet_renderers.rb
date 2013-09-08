module Redcarpet
  module Render
    class WithoutBlock < HTML

      def initialize(opts = {})
        super(opts)
      end

      # Regular markdown, just ignore all the block-level elements

      # def block_code(code, language)
 #        code
 #      end
 #
 #      def block_quote(quote)
 #        quote
 #      end
 #
 #      def block_html(raw_html)
 #        raw_html
 #      end
 #
 #      def header(text, header_level)
 #        "#{text} "
 #      end
 #
 #      def hrule
 #        " "
 #      end
 #
 #      def list(contents, list_type)
 #        " #{contents}"
 #      end
 #
 #      def list_item(text, list_type)
 #        "* #{text}"
 #      end

      def paragraph(text)
        puts "paragraph is being called"
        text.gsub("\n", "<br>") + "<br>" + "<br>"
      end

      def link(link, title, content)
        content.gsub!("\n", "<br>")
        "<a href=\"/#{link}\"> #{content} </a>"
      end

      def linebreak()
      end

      # Span-level calls

      # def linebreak
#         " "
#       end

      # Postprocessing: strip the newlines

      # def postprocess(document)
#         document.gsub("\n", '').strip
#       end
    end
  end
end