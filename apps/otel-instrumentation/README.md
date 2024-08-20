# Example OpenTelemetry instrumentation

`brew install direnv` for auto environment variable loading or run `. .envrc` manually to load environment variables.

Run locally

    node index.js

Run in Docker

    docker build -t adaptivekind/otel-instrumentation .
    docker run -p 3000:3000 adaptivekind/otel-instrumentation
