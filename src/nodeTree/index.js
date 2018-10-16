const serialiseTree = tree =>
    tree.children.map(child => child.isSubTree ? serialiseTree(child) : child);

const createNodeTree = () => {
    let children = [];

    return {
        add(node, isSubTree = false) {
            node.isSubTree = isSubTree;
            children = [...children, node];
            return this;
        },

        get children() {
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
