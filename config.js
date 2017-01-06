System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "ts",
  typescriptOptions: {
    "tsconfig": true
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "bundles/vendors.js": [
      "npm:rxjs@5.0.2.js",
      "npm:rxjs@5.0.2/Rx.js",
      "github:jspm/nodelibs-process@0.1.2.js",
      "github:jspm/nodelibs-process@0.1.2/index.js",
      "npm:process@0.11.9.js",
      "npm:process@0.11.9/browser.js",
      "npm:rxjs@5.0.2/symbol/observable.js",
      "npm:rxjs@5.0.2/util/root.js",
      "npm:rxjs@5.0.2/symbol/iterator.js",
      "npm:rxjs@5.0.2/symbol/rxSubscriber.js",
      "npm:rxjs@5.0.2/scheduler/animationFrame.js",
      "npm:rxjs@5.0.2/scheduler/AnimationFrameScheduler.js",
      "npm:rxjs@5.0.2/scheduler/AsyncScheduler.js",
      "npm:rxjs@5.0.2/Scheduler.js",
      "npm:rxjs@5.0.2/scheduler/AnimationFrameAction.js",
      "npm:rxjs@5.0.2/util/AnimationFrame.js",
      "npm:rxjs@5.0.2/scheduler/AsyncAction.js",
      "npm:rxjs@5.0.2/scheduler/Action.js",
      "npm:rxjs@5.0.2/Subscription.js",
      "npm:rxjs@5.0.2/util/UnsubscriptionError.js",
      "npm:rxjs@5.0.2/util/errorObject.js",
      "npm:rxjs@5.0.2/util/tryCatch.js",
      "npm:rxjs@5.0.2/util/isFunction.js",
      "npm:rxjs@5.0.2/util/isObject.js",
      "npm:rxjs@5.0.2/util/isArray.js",
      "npm:rxjs@5.0.2/scheduler/queue.js",
      "npm:rxjs@5.0.2/scheduler/QueueScheduler.js",
      "npm:rxjs@5.0.2/scheduler/QueueAction.js",
      "npm:rxjs@5.0.2/scheduler/async.js",
      "npm:rxjs@5.0.2/scheduler/asap.js",
      "npm:rxjs@5.0.2/scheduler/AsapScheduler.js",
      "npm:rxjs@5.0.2/scheduler/AsapAction.js",
      "npm:rxjs@5.0.2/util/Immediate.js",
      "npm:rxjs@5.0.2/observable/dom/AjaxObservable.js",
      "npm:rxjs@5.0.2/operator/map.js",
      "npm:rxjs@5.0.2/Subscriber.js",
      "npm:rxjs@5.0.2/Observer.js",
      "npm:rxjs@5.0.2/Observable.js",
      "npm:rxjs@5.0.2/util/toSubscriber.js",
      "npm:rxjs@5.0.2/scheduler/VirtualTimeScheduler.js",
      "npm:rxjs@5.0.2/testing/TestScheduler.js",
      "npm:rxjs@5.0.2/testing/SubscriptionLog.js",
      "npm:rxjs@5.0.2/testing/HotObservable.js",
      "npm:rxjs@5.0.2/util/applyMixins.js",
      "npm:rxjs@5.0.2/testing/SubscriptionLoggable.js",
      "npm:rxjs@5.0.2/Subject.js",
      "npm:rxjs@5.0.2/SubjectSubscription.js",
      "npm:rxjs@5.0.2/util/ObjectUnsubscribedError.js",
      "npm:rxjs@5.0.2/testing/ColdObservable.js",
      "npm:rxjs@5.0.2/Notification.js",
      "npm:rxjs@5.0.2/operator/timestamp.js",
      "npm:rxjs@5.0.2/operator/timeInterval.js",
      "npm:rxjs@5.0.2/util/TimeoutError.js",
      "npm:rxjs@5.0.2/util/ArgumentOutOfRangeError.js",
      "npm:rxjs@5.0.2/util/EmptyError.js",
      "npm:rxjs@5.0.2/observable/ConnectableObservable.js",
      "npm:rxjs@5.0.2/BehaviorSubject.js",
      "npm:rxjs@5.0.2/ReplaySubject.js",
      "npm:rxjs@5.0.2/operator/observeOn.js",
      "npm:rxjs@5.0.2/AsyncSubject.js",
      "npm:rxjs@5.0.2/add/operator/zipAll.js",
      "npm:rxjs@5.0.2/operator/zipAll.js",
      "npm:rxjs@5.0.2/operator/zip.js",
      "npm:rxjs@5.0.2/util/subscribeToResult.js",
      "npm:rxjs@5.0.2/InnerSubscriber.js",
      "npm:rxjs@5.0.2/util/isPromise.js",
      "npm:rxjs@5.0.2/OuterSubscriber.js",
      "npm:rxjs@5.0.2/observable/ArrayObservable.js",
      "npm:rxjs@5.0.2/util/isScheduler.js",
      "npm:rxjs@5.0.2/observable/EmptyObservable.js",
      "npm:rxjs@5.0.2/observable/ScalarObservable.js",
      "npm:rxjs@5.0.2/add/operator/zip.js",
      "npm:rxjs@5.0.2/add/operator/withLatestFrom.js",
      "npm:rxjs@5.0.2/operator/withLatestFrom.js",
      "npm:rxjs@5.0.2/add/operator/windowWhen.js",
      "npm:rxjs@5.0.2/operator/windowWhen.js",
      "npm:rxjs@5.0.2/add/operator/windowToggle.js",
      "npm:rxjs@5.0.2/operator/windowToggle.js",
      "npm:rxjs@5.0.2/add/operator/windowTime.js",
      "npm:rxjs@5.0.2/operator/windowTime.js",
      "npm:rxjs@5.0.2/add/operator/windowCount.js",
      "npm:rxjs@5.0.2/operator/windowCount.js",
      "npm:rxjs@5.0.2/add/operator/window.js",
      "npm:rxjs@5.0.2/operator/window.js",
      "npm:rxjs@5.0.2/add/operator/toPromise.js",
      "npm:rxjs@5.0.2/operator/toPromise.js",
      "npm:rxjs@5.0.2/add/operator/toArray.js",
      "npm:rxjs@5.0.2/operator/toArray.js",
      "npm:rxjs@5.0.2/add/operator/timestamp.js",
      "npm:rxjs@5.0.2/add/operator/timeoutWith.js",
      "npm:rxjs@5.0.2/operator/timeoutWith.js",
      "npm:rxjs@5.0.2/util/isDate.js",
      "npm:rxjs@5.0.2/add/operator/timeout.js",
      "npm:rxjs@5.0.2/operator/timeout.js",
      "npm:rxjs@5.0.2/add/operator/timeInterval.js",
      "npm:rxjs@5.0.2/add/operator/throttleTime.js",
      "npm:rxjs@5.0.2/operator/throttleTime.js",
      "npm:rxjs@5.0.2/add/operator/throttle.js",
      "npm:rxjs@5.0.2/operator/throttle.js",
      "npm:rxjs@5.0.2/add/operator/takeWhile.js",
      "npm:rxjs@5.0.2/operator/takeWhile.js",
      "npm:rxjs@5.0.2/add/operator/takeUntil.js",
      "npm:rxjs@5.0.2/operator/takeUntil.js",
      "npm:rxjs@5.0.2/add/operator/takeLast.js",
      "npm:rxjs@5.0.2/operator/takeLast.js",
      "npm:rxjs@5.0.2/add/operator/take.js",
      "npm:rxjs@5.0.2/operator/take.js",
      "npm:rxjs@5.0.2/add/operator/switchMapTo.js",
      "npm:rxjs@5.0.2/operator/switchMapTo.js",
      "npm:rxjs@5.0.2/add/operator/switchMap.js",
      "npm:rxjs@5.0.2/operator/switchMap.js",
      "npm:rxjs@5.0.2/add/operator/switch.js",
      "npm:rxjs@5.0.2/operator/switch.js",
      "npm:rxjs@5.0.2/add/operator/subscribeOn.js",
      "npm:rxjs@5.0.2/operator/subscribeOn.js",
      "npm:rxjs@5.0.2/observable/SubscribeOnObservable.js",
      "npm:rxjs@5.0.2/util/isNumeric.js",
      "npm:rxjs@5.0.2/add/operator/startWith.js",
      "npm:rxjs@5.0.2/operator/startWith.js",
      "npm:rxjs@5.0.2/operator/concat.js",
      "npm:rxjs@5.0.2/operator/mergeAll.js",
      "npm:rxjs@5.0.2/add/operator/skipWhile.js",
      "npm:rxjs@5.0.2/operator/skipWhile.js",
      "npm:rxjs@5.0.2/add/operator/skipUntil.js",
      "npm:rxjs@5.0.2/operator/skipUntil.js",
      "npm:rxjs@5.0.2/add/operator/skip.js",
      "npm:rxjs@5.0.2/operator/skip.js",
      "npm:rxjs@5.0.2/add/operator/single.js",
      "npm:rxjs@5.0.2/operator/single.js",
      "npm:rxjs@5.0.2/add/operator/share.js",
      "npm:rxjs@5.0.2/operator/share.js",
      "npm:rxjs@5.0.2/operator/multicast.js",
      "npm:rxjs@5.0.2/add/operator/sequenceEqual.js",
      "npm:rxjs@5.0.2/operator/sequenceEqual.js",
      "npm:rxjs@5.0.2/add/operator/scan.js",
      "npm:rxjs@5.0.2/operator/scan.js",
      "npm:rxjs@5.0.2/add/operator/sampleTime.js",
      "npm:rxjs@5.0.2/operator/sampleTime.js",
      "npm:rxjs@5.0.2/add/operator/sample.js",
      "npm:rxjs@5.0.2/operator/sample.js",
      "npm:rxjs@5.0.2/add/operator/retryWhen.js",
      "npm:rxjs@5.0.2/operator/retryWhen.js",
      "npm:rxjs@5.0.2/add/operator/retry.js",
      "npm:rxjs@5.0.2/operator/retry.js",
      "npm:rxjs@5.0.2/add/operator/repeatWhen.js",
      "npm:rxjs@5.0.2/operator/repeatWhen.js",
      "npm:rxjs@5.0.2/add/operator/repeat.js",
      "npm:rxjs@5.0.2/operator/repeat.js",
      "npm:rxjs@5.0.2/add/operator/reduce.js",
      "npm:rxjs@5.0.2/operator/reduce.js",
      "npm:rxjs@5.0.2/add/operator/race.js",
      "npm:rxjs@5.0.2/operator/race.js",
      "npm:rxjs@5.0.2/add/operator/publishLast.js",
      "npm:rxjs@5.0.2/operator/publishLast.js",
      "npm:rxjs@5.0.2/add/operator/publishReplay.js",
      "npm:rxjs@5.0.2/operator/publishReplay.js",
      "npm:rxjs@5.0.2/add/operator/publishBehavior.js",
      "npm:rxjs@5.0.2/operator/publishBehavior.js",
      "npm:rxjs@5.0.2/add/operator/publish.js",
      "npm:rxjs@5.0.2/operator/publish.js",
      "npm:rxjs@5.0.2/add/operator/pluck.js",
      "npm:rxjs@5.0.2/operator/pluck.js",
      "npm:rxjs@5.0.2/add/operator/partition.js",
      "npm:rxjs@5.0.2/operator/partition.js",
      "npm:rxjs@5.0.2/operator/filter.js",
      "npm:rxjs@5.0.2/util/not.js",
      "npm:rxjs@5.0.2/add/operator/pairwise.js",
      "npm:rxjs@5.0.2/operator/pairwise.js",
      "npm:rxjs@5.0.2/add/operator/onErrorResumeNext.js",
      "npm:rxjs@5.0.2/operator/onErrorResumeNext.js",
      "npm:rxjs@5.0.2/observable/FromObservable.js",
      "npm:rxjs@5.0.2/observable/ArrayLikeObservable.js",
      "npm:rxjs@5.0.2/observable/IteratorObservable.js",
      "npm:rxjs@5.0.2/observable/PromiseObservable.js",
      "npm:rxjs@5.0.2/add/operator/observeOn.js",
      "npm:rxjs@5.0.2/add/operator/multicast.js",
      "npm:rxjs@5.0.2/add/operator/min.js",
      "npm:rxjs@5.0.2/operator/min.js",
      "npm:rxjs@5.0.2/add/operator/mergeScan.js",
      "npm:rxjs@5.0.2/operator/mergeScan.js",
      "npm:rxjs@5.0.2/add/operator/mergeMapTo.js",
      "npm:rxjs@5.0.2/operator/mergeMapTo.js",
      "npm:rxjs@5.0.2/add/operator/mergeMap.js",
      "npm:rxjs@5.0.2/operator/mergeMap.js",
      "npm:rxjs@5.0.2/add/operator/mergeAll.js",
      "npm:rxjs@5.0.2/add/operator/merge.js",
      "npm:rxjs@5.0.2/operator/merge.js",
      "npm:rxjs@5.0.2/add/operator/max.js",
      "npm:rxjs@5.0.2/operator/max.js",
      "npm:rxjs@5.0.2/add/operator/materialize.js",
      "npm:rxjs@5.0.2/operator/materialize.js",
      "npm:rxjs@5.0.2/add/operator/mapTo.js",
      "npm:rxjs@5.0.2/operator/mapTo.js",
      "npm:rxjs@5.0.2/add/operator/map.js",
      "npm:rxjs@5.0.2/add/operator/every.js",
      "npm:rxjs@5.0.2/operator/every.js",
      "npm:rxjs@5.0.2/add/operator/let.js",
      "npm:rxjs@5.0.2/operator/let.js",
      "npm:rxjs@5.0.2/add/operator/last.js",
      "npm:rxjs@5.0.2/operator/last.js",
      "npm:rxjs@5.0.2/add/operator/auditTime.js",
      "npm:rxjs@5.0.2/operator/auditTime.js",
      "npm:rxjs@5.0.2/add/operator/audit.js",
      "npm:rxjs@5.0.2/operator/audit.js",
      "npm:rxjs@5.0.2/add/operator/isEmpty.js",
      "npm:rxjs@5.0.2/operator/isEmpty.js",
      "npm:rxjs@5.0.2/add/operator/ignoreElements.js",
      "npm:rxjs@5.0.2/operator/ignoreElements.js",
      "npm:rxjs@5.0.2/util/noop.js",
      "npm:rxjs@5.0.2/add/operator/groupBy.js",
      "npm:rxjs@5.0.2/operator/groupBy.js",
      "npm:rxjs@5.0.2/util/FastMap.js",
      "npm:rxjs@5.0.2/util/Map.js",
      "npm:rxjs@5.0.2/util/MapPolyfill.js",
      "npm:rxjs@5.0.2/add/operator/first.js",
      "npm:rxjs@5.0.2/operator/first.js",
      "npm:rxjs@5.0.2/add/operator/findIndex.js",
      "npm:rxjs@5.0.2/operator/findIndex.js",
      "npm:rxjs@5.0.2/operator/find.js",
      "npm:rxjs@5.0.2/add/operator/find.js",
      "npm:rxjs@5.0.2/add/operator/finally.js",
      "npm:rxjs@5.0.2/operator/finally.js",
      "npm:rxjs@5.0.2/add/operator/filter.js",
      "npm:rxjs@5.0.2/add/operator/elementAt.js",
      "npm:rxjs@5.0.2/operator/elementAt.js",
      "npm:rxjs@5.0.2/add/operator/expand.js",
      "npm:rxjs@5.0.2/operator/expand.js",
      "npm:rxjs@5.0.2/add/operator/exhaustMap.js",
      "npm:rxjs@5.0.2/operator/exhaustMap.js",
      "npm:rxjs@5.0.2/add/operator/exhaust.js",
      "npm:rxjs@5.0.2/operator/exhaust.js",
      "npm:rxjs@5.0.2/add/operator/do.js",
      "npm:rxjs@5.0.2/operator/do.js",
      "npm:rxjs@5.0.2/add/operator/distinctUntilKeyChanged.js",
      "npm:rxjs@5.0.2/operator/distinctUntilKeyChanged.js",
      "npm:rxjs@5.0.2/operator/distinctUntilChanged.js",
      "npm:rxjs@5.0.2/add/operator/distinctUntilChanged.js",
      "npm:rxjs@5.0.2/add/operator/distinct.js",
      "npm:rxjs@5.0.2/operator/distinct.js",
      "npm:rxjs@5.0.2/util/Set.js",
      "npm:rxjs@5.0.2/add/operator/delayWhen.js",
      "npm:rxjs@5.0.2/operator/delayWhen.js",
      "npm:rxjs@5.0.2/add/operator/delay.js",
      "npm:rxjs@5.0.2/operator/delay.js",
      "npm:rxjs@5.0.2/add/operator/defaultIfEmpty.js",
      "npm:rxjs@5.0.2/operator/defaultIfEmpty.js",
      "npm:rxjs@5.0.2/add/operator/debounceTime.js",
      "npm:rxjs@5.0.2/operator/debounceTime.js",
      "npm:rxjs@5.0.2/add/operator/debounce.js",
      "npm:rxjs@5.0.2/operator/debounce.js",
      "npm:rxjs@5.0.2/add/operator/dematerialize.js",
      "npm:rxjs@5.0.2/operator/dematerialize.js",
      "npm:rxjs@5.0.2/add/operator/count.js",
      "npm:rxjs@5.0.2/operator/count.js",
      "npm:rxjs@5.0.2/add/operator/concatMapTo.js",
      "npm:rxjs@5.0.2/operator/concatMapTo.js",
      "npm:rxjs@5.0.2/add/operator/concatMap.js",
      "npm:rxjs@5.0.2/operator/concatMap.js",
      "npm:rxjs@5.0.2/add/operator/concatAll.js",
      "npm:rxjs@5.0.2/operator/concatAll.js",
      "npm:rxjs@5.0.2/add/operator/concat.js",
      "npm:rxjs@5.0.2/add/operator/combineLatest.js",
      "npm:rxjs@5.0.2/operator/combineLatest.js",
      "npm:rxjs@5.0.2/add/operator/combineAll.js",
      "npm:rxjs@5.0.2/operator/combineAll.js",
      "npm:rxjs@5.0.2/add/operator/catch.js",
      "npm:rxjs@5.0.2/operator/catch.js",
      "npm:rxjs@5.0.2/add/operator/bufferWhen.js",
      "npm:rxjs@5.0.2/operator/bufferWhen.js",
      "github:jspm/nodelibs-buffer@0.1.0.js",
      "github:jspm/nodelibs-buffer@0.1.0/index.js",
      "npm:buffer@3.6.0.js",
      "npm:buffer@3.6.0/index.js",
      "npm:isarray@1.0.0.js",
      "npm:isarray@1.0.0/index.js",
      "npm:ieee754@1.1.8.js",
      "npm:ieee754@1.1.8/index.js",
      "npm:base64-js@0.0.8.js",
      "npm:base64-js@0.0.8/lib/b64.js",
      "npm:rxjs@5.0.2/add/operator/bufferToggle.js",
      "npm:rxjs@5.0.2/operator/bufferToggle.js",
      "npm:rxjs@5.0.2/add/operator/bufferTime.js",
      "npm:rxjs@5.0.2/operator/bufferTime.js",
      "npm:rxjs@5.0.2/add/operator/bufferCount.js",
      "npm:rxjs@5.0.2/operator/bufferCount.js",
      "npm:rxjs@5.0.2/add/operator/buffer.js",
      "npm:rxjs@5.0.2/operator/buffer.js",
      "npm:rxjs@5.0.2/add/observable/dom/webSocket.js",
      "npm:rxjs@5.0.2/observable/dom/webSocket.js",
      "npm:rxjs@5.0.2/observable/dom/WebSocketSubject.js",
      "npm:rxjs@5.0.2/util/assign.js",
      "npm:rxjs@5.0.2/add/observable/dom/ajax.js",
      "npm:rxjs@5.0.2/observable/dom/ajax.js",
      "npm:rxjs@5.0.2/add/observable/zip.js",
      "npm:rxjs@5.0.2/observable/zip.js",
      "npm:rxjs@5.0.2/add/observable/timer.js",
      "npm:rxjs@5.0.2/observable/timer.js",
      "npm:rxjs@5.0.2/observable/TimerObservable.js",
      "npm:rxjs@5.0.2/add/observable/throw.js",
      "npm:rxjs@5.0.2/observable/throw.js",
      "npm:rxjs@5.0.2/observable/ErrorObservable.js",
      "npm:rxjs@5.0.2/add/observable/using.js",
      "npm:rxjs@5.0.2/observable/using.js",
      "npm:rxjs@5.0.2/observable/UsingObservable.js",
      "npm:rxjs@5.0.2/add/observable/range.js",
      "npm:rxjs@5.0.2/observable/range.js",
      "npm:rxjs@5.0.2/observable/RangeObservable.js",
      "npm:rxjs@5.0.2/add/observable/pairs.js",
      "npm:rxjs@5.0.2/observable/pairs.js",
      "npm:rxjs@5.0.2/observable/PairsObservable.js",
      "npm:rxjs@5.0.2/add/observable/onErrorResumeNext.js",
      "npm:rxjs@5.0.2/add/observable/of.js",
      "npm:rxjs@5.0.2/observable/of.js",
      "npm:rxjs@5.0.2/add/observable/never.js",
      "npm:rxjs@5.0.2/observable/never.js",
      "npm:rxjs@5.0.2/observable/NeverObservable.js",
      "npm:rxjs@5.0.2/add/observable/race.js",
      "npm:rxjs@5.0.2/add/observable/merge.js",
      "npm:rxjs@5.0.2/observable/merge.js",
      "npm:rxjs@5.0.2/add/observable/interval.js",
      "npm:rxjs@5.0.2/observable/interval.js",
      "npm:rxjs@5.0.2/observable/IntervalObservable.js",
      "npm:rxjs@5.0.2/add/observable/if.js",
      "npm:rxjs@5.0.2/observable/if.js",
      "npm:rxjs@5.0.2/observable/IfObservable.js",
      "npm:rxjs@5.0.2/add/observable/generate.js",
      "npm:rxjs@5.0.2/observable/GenerateObservable.js",
      "npm:rxjs@5.0.2/add/observable/fromPromise.js",
      "npm:rxjs@5.0.2/observable/fromPromise.js",
      "npm:rxjs@5.0.2/add/observable/fromEventPattern.js",
      "npm:rxjs@5.0.2/observable/fromEventPattern.js",
      "npm:rxjs@5.0.2/observable/FromEventPatternObservable.js",
      "npm:rxjs@5.0.2/add/observable/fromEvent.js",
      "npm:rxjs@5.0.2/observable/fromEvent.js",
      "npm:rxjs@5.0.2/observable/FromEventObservable.js",
      "npm:rxjs@5.0.2/add/observable/from.js",
      "npm:rxjs@5.0.2/observable/from.js",
      "npm:rxjs@5.0.2/add/observable/forkJoin.js",
      "npm:rxjs@5.0.2/observable/forkJoin.js",
      "npm:rxjs@5.0.2/observable/ForkJoinObservable.js",
      "npm:rxjs@5.0.2/add/observable/empty.js",
      "npm:rxjs@5.0.2/observable/empty.js",
      "npm:rxjs@5.0.2/add/observable/defer.js",
      "npm:rxjs@5.0.2/observable/defer.js",
      "npm:rxjs@5.0.2/observable/DeferObservable.js",
      "npm:rxjs@5.0.2/add/observable/concat.js",
      "npm:rxjs@5.0.2/observable/concat.js",
      "npm:rxjs@5.0.2/add/observable/combineLatest.js",
      "npm:rxjs@5.0.2/observable/combineLatest.js",
      "npm:rxjs@5.0.2/add/observable/bindNodeCallback.js",
      "npm:rxjs@5.0.2/observable/bindNodeCallback.js",
      "npm:rxjs@5.0.2/observable/BoundNodeCallbackObservable.js",
      "npm:rxjs@5.0.2/add/observable/bindCallback.js",
      "npm:rxjs@5.0.2/observable/bindCallback.js",
      "npm:rxjs@5.0.2/observable/BoundCallbackObservable.js",
      "npm:@angular/compiler@2.4.1.js",
      "npm:@angular/compiler@2.4.1/bundles/compiler.umd.js",
      "npm:@angular/core@2.4.1.js",
      "npm:@angular/core@2.4.1/bundles/core.umd.js",
      "npm:@angular/common@2.4.1.js",
      "npm:@angular/common@2.4.1/bundles/common.umd.js"
    ]
  },

  packages: {
    "app": {
      "defaultExtension": "ts"
    }
  },

  meta: {
    "*.html": {
      "loader": "text"
    },
    "*.css": {
      "loader": "css"
    },
    "*.ts": {
      "loader": "ts"
    }
  },

  map: {
    "@angular/common": "npm:@angular/common@2.4.1",
    "@angular/compiler": "npm:@angular/compiler@2.4.1",
    "@angular/core": "npm:@angular/core@2.4.1",
    "@angular/http": "npm:@angular/http@2.4.1",
    "@angular/platform-browser": "npm:@angular/platform-browser@2.4.1",
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.4.1",
    "@angular/router": "npm:@angular/router@3.4.1",
    "angular2-oauth2": "npm:angular2-oauth2@1.3.10",
    "bootswatch": "npm:bootswatch@3.3.7",
    "clean-css": "npm:clean-css@3.4.23",
    "css": "github:systemjs/plugin-css@0.1.32",
    "jquery": "npm:jquery@2.2.4",
    "reflect-metadata": "npm:reflect-metadata@0.1.9",
    "rxjs": "npm:rxjs@5.0.2",
    "text": "github:systemjs/plugin-text@0.0.7",
    "ts": "github:frankwallis/plugin-typescript@4.0.16",
    "ts-runtime": "npm:babel-runtime@5.8.38",
    "typescript": "npm:typescript@1.8.10",
    "zone.js": "npm:zone.js@0.7.2",
    "github:frankwallis/plugin-typescript@4.0.16": {
      "typescript": "npm:typescript@1.8.10"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:@angular/common@2.4.1": {
      "@angular/core": "npm:@angular/core@2.4.1"
    },
    "npm:@angular/compiler@2.4.1": {
      "@angular/core": "npm:@angular/core@2.4.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/core@2.4.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rxjs": "npm:rxjs@5.0.2",
      "zone.js": "npm:zone.js@0.7.2"
    },
    "npm:@angular/http@2.4.1": {
      "@angular/core": "npm:@angular/core@2.4.1",
      "@angular/platform-browser": "npm:@angular/platform-browser@2.4.1",
      "rxjs": "npm:rxjs@5.0.2"
    },
    "npm:@angular/platform-browser-dynamic@2.4.1": {
      "@angular/common": "npm:@angular/common@2.4.1",
      "@angular/compiler": "npm:@angular/compiler@2.4.1",
      "@angular/core": "npm:@angular/core@2.4.1",
      "@angular/platform-browser": "npm:@angular/platform-browser@2.4.1"
    },
    "npm:@angular/platform-browser@2.4.1": {
      "@angular/common": "npm:@angular/common@2.4.1",
      "@angular/core": "npm:@angular/core@2.4.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:@angular/router@3.4.1": {
      "@angular/common": "npm:@angular/common@2.4.1",
      "@angular/core": "npm:@angular/core@2.4.1",
      "@angular/platform-browser": "npm:@angular/platform-browser@2.4.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rxjs": "npm:rxjs@5.0.2"
    },
    "npm:amdefine@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:angular2-oauth2@1.3.10": {
      "base64-js": "npm:base64-js@0.0.8",
      "buffer": "npm:buffer@3.6.0",
      "js-base64": "npm:js-base64@2.1.9",
      "sha256": "npm:sha256@0.2.0"
    },
    "npm:asn1.js@4.9.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bn.js@4.11.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.3",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.2",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cipher-base@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:clean-css@3.4.23": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.2"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.9",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:elliptic@6.3.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.6",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:js-base64@2.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.6"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.9.1",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rxjs@5.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "symbol-observable": "npm:symbol-observable@1.0.4"
    },
    "npm:sha.js@2.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha256@0.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "convert-hex": "npm:convert-hex@0.1.0",
      "convert-string": "npm:convert-string@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.9"
    },
    "npm:typescript@1.8.10": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:zone.js@0.7.2": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "timers": "github:jspm/nodelibs-timers@0.1.0"
    }
  }
});
