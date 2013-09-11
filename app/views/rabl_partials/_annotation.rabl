
collection locals[:annotation] if locals[:type] == :collection


object locals[:annotation]

child :song do

	attributes *Song.column_names

	child :album do
		attributes *Album.column_names
	end
end