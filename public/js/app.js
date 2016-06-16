(function(){
   var Memo = Backbone.Model.extend({
      urlRoot: "/memo",
      idAttribute: "_id",
      defaults: {
         "content": ""
      }
   });

   var memo = new Memo();
   console.log("Before save: " + JSON.stringify(memo));
   console.log("isNew(): " + memo.isNew());
   // RESTful sample 3-1
   memo.save({content: "Marimo"}, {
      success: function() {
          console.log("After save(post) memo: " + JSON.stringify(memo));
          console.log("After save(post) memo.isNew(): " + memo.isNew());
      }
   }).pipe(function() {
      // RESTful sample 3-2
      memo.set({content: "XXXXXXXXXX"});
      console.log("Before fetch memo: " + JSON.stringify(memo));
      memo.fetch({
         success: function() {
            console.log("After fetch memo: " + JSON.stringify(memo));
         }
      })
   }).pipe(function() {
      // RESTful sample 3-3
      console.log("Before save(put) memo: " + JSON.stringify(memo));
      memo.save({content: "Marimo Design.,Inc."},{
         success: function() {
            console.log("After save(put) memo: " + JSON.stringify(memo));
         }
      })
   }).done(function() {
      // RESTful sample 3-4
      console.log("Before delete memo: " + JSON.stringify(memo));
      memo.destroy({
         success: function() {
            console.log("After delete memo: " + JSON.stringify(memo));
         }
      });
   });
   console.log("After save: " + JSON.stringify(memo));
   console.log("isNew(): " + memo.isNew());

   // RESTful sample 3-5
   var MemoList = Backbone.Collection.extend({
      model: Memo,
      url: "/memo"
   });
   var memoList = new MemoList();
   console.log("Before collection.length: " + memoList.length);
   var memo = memoList.create({content: "Mamo1"},{
      success: function() {
         console.log("After create model: " + JSON.stringify(memoList));
         console.log("After create collection.length: " + memoList.length);
      }
   });
   console.log("After model: " + JSON.stringify(memo));
   console.log("After collection.length: " + memoList.length);
   
}());
