import { OTLPTraceExporter } from '@opentelemetry/exporter-otlp-http';
import { Resource } from '@opentelemetry/resources';
import {
  ConsoleSpanExporter,
  SimpleSpanProcessor,
} from '@opentelemetry/sdk-trace-base';
import { WebTracerProvider } from '@opentelemetry/sdk-trace-web';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

const tracerProvider = new WebTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: 'demo_server',
  }),
});

tracerProvider.addSpanProcessor(new SimpleSpanProcessor(new OTLPTraceExporter()));

tracerProvider.addSpanProcessor(
  new SimpleSpanProcessor(new ConsoleSpanExporter()),
);

tracerProvider.register();

const queryButton = document.querySelector('#query-button');


const tracer = tracerProvider.getTracer('example-tracer-web');

queryButton?.addEventListener('click', () => {
  const span = tracer.startSpan('query-button');
  span.end();
});

