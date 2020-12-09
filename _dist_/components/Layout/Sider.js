/* src/components/Layout/Sider.svelte generated by Svelte v3.31.0 */
import {
	SvelteComponent,
	attr,
	create_slot,
	detach,
	element,
	init,
	insert,
	safe_not_equal,
	transition_in,
	transition_out,
	update_slot
} from "../../../web_modules/svelte/internal.js";

function create_fragment(ctx) {
	let aside;
	let aside_class_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[2].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[1], null);

	return {
		c() {
			aside = element("aside");
			if (default_slot) default_slot.c();
			attr(aside, "class", aside_class_value = "ant-layout-sider");
			attr(aside, "style", /*style*/ ctx[0]);
		},
		m(target, anchor) {
			insert(target, aside, anchor);

			if (default_slot) {
				default_slot.m(aside, null);
			}

			current = true;
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 2) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[1], dirty, null, null);
				}
			}

			if (!current || dirty & /*style*/ 1) {
				attr(aside, "style", /*style*/ ctx[0]);
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
			if (detaching) detach(aside);
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { style = undefined } = $$props;

	$$self.$$set = $$props => {
		if ("style" in $$props) $$invalidate(0, style = $$props.style);
		if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
	};

	return [style, $$scope, slots];
}

class Sider extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { style: 0 });
	}
}

export default Sider;