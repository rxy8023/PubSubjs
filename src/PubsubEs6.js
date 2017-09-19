class event {
    constructor(){
        this.publish = publish;
        this.subscribe = subscribe;
        this.unsubscribe = unsubscribe;
    }
    caches = {};
			/**
			 *	Events.publish
			 *	e.g.: Events.publish("/Article/added", [article], this);
			 *
			 *	@class Events
			 *	@method publish
			 *	@param topic {String}
			 *	@param args	{Array}
			 *	@param scope {Object} Optional
			 */
            publish(topic, args, scope){
                if(caches[topic]){
                    let thisTopic = cache[topic],
                        i = thisTopic.length-1;

                    for(i; i>=0; i-=1){
                        thisTopic[i].apply( scope || this,args || [])
                    }
                }
            }

            /**
             * Event.subscribe
             * e.g.: Events.subscribe("/Article/added", Articles.validate)
             * 
             * @class Events
             * @method subscribe
             * @param topic {String}
             * @param callback {function}
             * @return event hander {Array}
             */

             subscribe(topic, callback){
                 if(!caches[topic]){
                     caches(topic) = [];
                     caches[topic].push(callback);
                     return [topic, callback];
                 }
             }
             
            /**
             * Event.unsubscribe
             * e.g.: Events.unsubscribe( [article], Articles.validate)
             * 
             * @class Events
             * @method unsubscribe
             * @param handle {Array}
             * @param competely {boolean}
             * @return {type, discription} 
             * 
             */

             unsubscribe(handle, competely){
                let t = handle[0],
                i = cache[t].length - 1;

            if (cache[t]) {
                for (i; i >= 0; i -= 1) {
                    if (cache[t][i] === handle[1]) {
                        cache[t].splice(cache[t][i], 1);
                        if(completly){ delete cache[t]; }
                    }
                }
            }
             }


}