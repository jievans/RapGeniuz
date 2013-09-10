class Image < ActiveRecord::Base
  attr_accessible :imageable_id, :imageable_type, :url

  belongs_to :imageable, polymorphic: true
end
