/**
 * Represents a TimeSpan.
 */
define(["moment", "util/util", "serializers/time_span_serializer", "presenters/duration_presenter"],function(moment,_, TimeSpanSerializer, DurationPresenter){

  var create = function(){
    var _start, _end;
    var checkin_observer = _.observable();
    var checkout_observer = _.observable();
    var change_observer = _.observable();
    
    _start = moment();

    var start = function(start){
      if(start){
        _start = start;
        change_observer.notify(this);
      }
      return _start;
    }

    var end = function(end){
      if(end){
        _end = end
        change_observer.notify(this);
      }
      return _end;
    }

    /**
     * Calculates the duration based on start and end time.
     * If the end time is missing the duration will be calculated
     * as if end was set to "NOW".
     */
    var duration = function(){
      var the_end = end() || moment();
    
      return moment.duration(the_end.diff(start()));
    }

    /**
     * Reports duration as a string.
     * E.g: "1:00"
     */
    var toString = function(){
      return DurationPresenter.present(duration());
    }

    var checkOut = function(time_stamp){
      //this used to preserve contex
      this.end(time_stamp || moment());
      checkout_observer.notify(this);
    }

    var toJSON = function(){
      return TimeSpanSerializer.to_obj(this);
    }

    return {
      start: start,
      end: end,
      checkOut: checkOut,
      duration: duration,
      toString: toString,
      toJSON: toJSON,
      trackCheckin: checkin_observer.add,
      trackCheckout: checkout_observer.add,
      trackChange: change_observer.add,
      isCheckedOut: function(){
        return !!end();
      }

    }
  };

  return {
    create: create
  };
});
