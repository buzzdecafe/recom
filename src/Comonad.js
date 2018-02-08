const o = (f, g) => x => f(g(x));

// the basic comonad
const Store = view => here => ({  
    map:       f  => Store(o(f, view))(here),
    duplicate: () => Store(next => Store(view)(next))(here),
    extract:   () => view(here),
    move:      h  => Store(view)(h)
});

export { Store }
