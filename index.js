/*
 * Copyright 2022 New Relic Corporation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict'

/**
 * Allows users to `require('@newrelic/next')` directly in their app. If they
 * for some reason choose to explicitly use an older version of our instrumentation
 * then the supportability metrics for custom instrumentation will trigger.
 */
const newrelic = require('newrelic')

newrelic.instrumentWebframework('./next-server', require('./lib/next-server'))
newrelic.instrumentWebframework('./render', require('./lib/render'))
newrelic.instrumentWebframework('./context', require('./lib/context'))
