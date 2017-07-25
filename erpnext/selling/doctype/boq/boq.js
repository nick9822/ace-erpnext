// Copyright (c) 2016, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Boq', {
	refresh: function(frm) {

	}
});

cur_frm.cscript.refresh = function(doc, cdt, cdn) {


	if(doc.status!=="Lost") {
		if(doc.status!=="Quotation") {
			
		}

		//cur_frm.add_custom_button(__('Quotation'),cur_frm.cscript.create_quotation, __("Make"));
		cur_frm.add_custom_button(__('Quotation'),cur_frm.cscript.create_quotation, __("Make"));
		cur_frm.add_custom_button(__('Revise'),cur_frm.cscript.create_quotation, __("Make"));
		cur_frm.page.set_inner_btn_group_as_primary(__("Make"));
	}

}
