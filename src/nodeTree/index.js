const serialiseTree = tree =>
    tree.getChildren().map(child => child.isSubTree ? serialiseTree(child) : child);

const createNodeTree = () => {
    let children = [];

    return {
        add(node, isSubTree = false) {
            node.isSubTree = isSubTree;
            children = [...children, node];
            return this;
        },

        getChildren() {
            return [...children]; // TODO: perf?!
        },

        createSubTree() { // TODO: align terminology with tree/graph theory
            const subtree = createNodeTree();
            this.add(subtree, true);
            return subtree;
        },

        serialise() { // TODO: strip post-development?!
            return serialiseTree(this);
        },
    };
};

export default createNodeTree;
