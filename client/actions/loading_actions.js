"use strict";

import Reflux from "reflux";

const LoadingActions = Reflux.createActions({
  "loading": {
    asyncResult: false,
    sync: true
  },
  "loadingComplete": {
    asyncResult: false,
    sync: true
  }
});

export default LoadingActions;