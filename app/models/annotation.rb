class Annotation < ActiveRecord::Base
  attr_accessible :referent, :body, :user_id
end
