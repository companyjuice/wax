export = Wax;

declare module 'wax-core' {
    interface BaseProps {
        audioContext: AudioContext;
        node?: AudioNode;
        children
    }

    interface ArrayTree<T> extends Array<T> {
        [i: number]: T | Array<T>;
    }

    type AudioComponent<TProps, TChildren = AudioNode[]>
        = <TProps, TChildren>(props: TProps & BaseProps) => AudioNode;

    type createAudioElement<TProps, TChildren = AudioNode[], TResult = ArrayTree<AudioNode>>
        = <TProps, TChildren, TResult>(
            Component: AudioComponent<TProps, TChildren>,
            props: TProps & BaseProps,
            ...children: TChildren,
        ) => TResult;
}
