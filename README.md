# Wax

An experimental, JSX-compatible renderer for the Web Audio API.

```jsx
/** @jsx createAudioElement */

import {
    createAudioElement,
    renderAudioGraph,
    AudioGraph,
    Oscillator,
    Gain,
    StereoPanner,
    Destination,
    setValueAtTime,
    exponentialRampToValueAtTime,
} from 'wax-core';

renderAudioGraph(
    <AudioGraph>
        <Oscillator
            frequency={[
                setValueAtTime(200, 0),
                exponentialRampToValueAtTime(800, 3),
            ]}
            type="square"
            endTime={3}
        />
        <Gain gain={0.2} />
        <StereoPanner pan={-1} />
        <Destination />
    </AudioGraph>
);
```

## Example Apps

Consult the [example](https://github.com/jamesseanwright/wax/tree/master/example) directory for a few small example apps that use Wax. The included [`README`](https://github.com/jamesseanwright/wax/blob/master/example/README.md) will summarise them and detail how they can be built and ran.

## Documentation

* [Getting Started](https://github.com/jamesseanwright/wax/blob/docs/001-getting-started.md)
* [Manipulating Audio Parameters](https://github.com/jamesseanwright/wax/blob/docs/002-audio-parameters.md)
* [Building Complex Graphs with `<Aggregation />`s](https://github.com/jamesseanwright/wax/blob/docs/003-aggregations.md)
* [Updating Rendered `<AudioGraph />`s](https://github.com/jamesseanwright/wax/blob/docs/004-updating-audiographs.md)
* [API Reference](https://github.com/jamesseanwright/wax/blob/docs/005-api-reference.md)
* [Local Development](https://github.com/jamesseanwright/wax/blob/docs/006-local-development.md)
