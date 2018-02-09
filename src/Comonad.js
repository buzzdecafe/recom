const comp = (f, g) => x => f(g(x));

// the basic comonad
const Store = (here, view) => ({
    map:       f  => Store(here, comp(f, view)),
    duplicate: () => Store(here, next => Store(next, view)),
    extract:   () => view(here),
    move:      h  => Store(h, view)
});

export { Store }
