### Handle in show when song cannot be found
#### Implement RedCarpet Postprocessor

class SongsController < ApplicationController

  include SongsHelper
  include ParsingHelper

  def new
    @song = Song.new
    @artist = Artist.new
    @album = Album.new
    render "new"
  end

  def create

   # debugger
    html_lyrics = non_block_markdown(params[:song][:lyrics])

    # html_lyrics = params[:song][:lyrics].gsub("\r\n", "<br>").gsub("\n", "<br>")

    params[:song][:lyrics] = html_lyrics
    params[:song][:user_id] = current_user.id

    @song = Song.new(params[:song])
    @artist = Artist.find_or_initialize_by_name(params[:artist][:name])
    @album = Album.find_or_initialize_by_name(params[:album][0])

    begin
      ActiveRecord::Base.transaction do
        @artist.save! unless @artist.persisted?
        @album.artist_id ||= @artist.id
        @album.save! unless @album.persisted?
        @song.artist_id = @artist.id
        @song.album_id = @album.id

        @song.save!
      end

      redirect_to song_url(@song)
    rescue  => e

      flash.now[:notices] ||= []

      [@song, @artist, @album].each do |ar_object|
        ar_object.errors.full_messages.each do |message|
          flash.now[:notices] << message
        end
      end

      render :new
    end
  end

  # def do_match string, regexp
#     string =~ regexp
#     debugger
#     $1
#   end

  def plain_update
   # edited_lyrics = markdown(params[:lyrics]).gsub("\n", "").strip
  # edited_lyrics = non_block_markdown(params[:lyrics])
  # edited_lyrics = edited_lyrics.html_safe
    anchor_pattern = /(\[)(.+?)(\])(\()(\d+)(\))/m
    edited_lyrics = params[:lyrics].to_param().strip()
  # pattern = /(?<firstbracket>\[)(?<body>.+?)(?<secondbracket>\])(?<openparen>\()(?<id>\d+)(?<closeparen>\))/

   # do_match(pattern, edited_lyrics)

   # without this line, the global variables don't get set
   # edited_lyrics =~ pattern

   edited_lyrics.gsub!(anchor_pattern) do |match|
     "<a href=\"/#{$5}\">#{$2}</a>"
   end

   edited_lyrics.gsub!(/\n/) {|match| "<br>"}

   # edited_lyrics = make_anchors(edited_lyrics)



   p edited_lyrics

    song = Song.find(params[:id])
    full_edited = html_update(song.lyrics, edited_lyrics)


  #  debugger
    unless errors = lyrics_invalid?(song.lyrics, full_edited)
      song.update_attributes!(:lyrics => full_edited)
      render :json => song
    else
      render :json => errors, :status => 409
    end
  end

  def update
    song = Song.find(params[:id])
    unless errors = lyrics_invalid?(song.lyrics, params[:song][:lyrics])
      song.update_attributes!(params[:song])
      render :json => song
    else
      render :json => errors, :status => 409
    end
  end

  def show
    @song = Song.find(params[:id])
    @bop_artist_name = @song.artist.name.downcase.gsub(" ", "-")
    @bop_song_name = @song.title.downcase.gsub(" ", "-")
    respond_to do |format|
      format.html
      format.json { render "show.rabl" }
    end
  end


end
