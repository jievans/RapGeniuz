
collection locals[:annotation] if locals[:type] == :collection


object locals[:annotation]
attributes *Annotation.column_names

child :user do
	attributes :username, :id
end

child :song do

	attributes *Song.column_names

	child :album do
		attributes *Album.column_names
	end

	child :artist do
		attributes *Artist.column_names
	end

end

