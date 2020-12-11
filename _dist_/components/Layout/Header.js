/* src/components/Layout/Header.svelte generated by Svelte v3.31.0 */
import {
	SvelteComponent,
	assign,
	attr,
	create_slot,
	detach,
	element,
	exclude_internal_props,
	init,
	insert,
	safe_not_equal,
	transition_in,
	transition_out,
	update_slot
} from "../../../web_modules/svelte/internal.js";

function create_fragment(ctx) {
	let header;
	let current;
	const default_slot_template = /*#slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	return {
		c() {
			header = element("header");
			if (default_slot) default_slot.c();
			attr(header, "class", /*classes*/ ctx[1]);
			attr(header, "style", /*style*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, header, anchor);

			if (default_slot) {
				default_slot.m(header, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 4) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, null, null);
				}
			}

			if (!current || dirty & /*classes*/ 2) {
				attr(header, "class", /*classes*/ ctx[1]);
			}

			if (!current || dirty & /*style*/ 1) {
				attr(header, "style", /*style*/ ctx[0]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(header);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { style = "" } = $$props;

	$$self.$$set = $$new_props => {
		$$invalidate(4, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("style" in $$new_props) $$invalidate(0, style = $$new_props.style);
		if ("$$scope" in $$new_props) $$invalidate(2, $$scope = $$new_props.$$scope);
	};

	let classes;

	$$self.$$.update = () => {
		$: $$invalidate(1, classes = ["ant-layout-header", $$props.class ? $$props.class : false].filter(item => item).join(" "));
	};

	$$props = exclude_internal_props($$props);
	return [style, classes, $$scope, slots];
}

class Header extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { style: 0 });
	}
}

export default Header;