RapGenius.Views.UserActivityView = Backbone.View.extend({

	initialize: function(){
		this.listenTo(RapGenius.currentUser, "change", this.render);
	},

	subViews: [],

	events: {
		"click #songs-button": "showSongsTab",
		"click #annotations-button": "render"
	},

	id: "user-activity",

	render: function(){
		this.$el.empty();
		var tags = JST["users/activity"]();
		var $activityContent = $("<div>", {id: "activity-content"});

		var that = this;
		this.collection.each(function(annotation){
			var annotationStreamView = new RapGenius.Views.StreamAnnotationView({
																			model: annotation,
																	});
		  that.subViews.push(annotationStreamView);
			$activityContent.append(annotationStreamView.render().$el);
		});

		this.$el.append(tags, $activityContent);
		return this;
	},

	showSongsTab: function(event){
		$("#activity-content").empty();
		var content = JST["songs/stream"]({songs: RapGenius.Repositories.SongStreams.user});
		$("#activity-content").html(content);
	},
});