
var graph = {
    v: ['a', 'b', 'c', 'd', 'e', 'f'],
    e: { 'a': ['b'],
        'b': ['a', 'c', 'd'],
        'c': ['b', 'd'],
        'd': ['b', 'c'],
        'e': ['f'],
        'f': ['e']
    }
}

function dfs(g) {
    v = g.v, e = g.e
    visited = {}
    for (let i = 0; i < v.length; i++) {
        if (!visited[v[i]]) {
            visit(v[i]);
        }
    }
    function visit(vertex) {
        visited[vertex] = true
        console.log(vertex)
        var edges = e[vertex]
        for (let i = 0; i < vertex.length; i++) {
            if (!visited[edges[i]]) {
                visit(edges[i]);
            }
        }
    }
    console.log(visited)
}

dfs(graph)

