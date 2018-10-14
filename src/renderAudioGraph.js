import connectNodes from './connectNodes';

export const renderAudioGraph = (createGraphElement, context = new AudioContext()) => {
    const nodes = createGraphElement(context);
    connectNodes(nodes); // TODO: make connectNodes traverse a tree wrapper?
    return nodes;
};

export const renderPersistentAudioGraph = (
    createGraphElement,
    context = new AudioContext(),
) => {
    let nodes = renderAudioGraph(createGraphElement, context);

    return createNewGraphElement => {
        nodes = createNewGraphElement(context, nodes);
    };
};
