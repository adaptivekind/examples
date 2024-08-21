/*
 * NodeJS auto instrumentation does not yet generate metrics.
 *
 * https://github.com/open-telemetry/opentelemetry.io/issues/4171
 *
 * ... hence why we need this instrumentation code, instead of driven by
 * environment variables.
 *
 * Code with thanks from
 *
 * https://opentelemetry.io/docs/languages/js/getting-started/nodejs/
 */

const { NodeSDK } = require("@opentelemetry/sdk-node");
const {
  getNodeAutoInstrumentations,
} = require("@opentelemetry/auto-instrumentations-node");
const {
  PeriodicExportingMetricReader,
  ConsoleMetricExporter,
} = require("@opentelemetry/sdk-metrics");
const {
  OTLPMetricExporter,
} = require('@opentelemetry/exporter-metrics-otlp-http');

const sdk = new NodeSDK({
  metricReader: new PeriodicExportingMetricReader({
    exporter:
      process.env.OTEL_METRICS_EXPORTER === "console"
        ? new ConsoleMetricExporter()
        : new OTLPMetricExporter(),
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();
