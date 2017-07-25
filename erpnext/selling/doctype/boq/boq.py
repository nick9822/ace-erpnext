# -*- coding: utf-8 -*-
# Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Boq(Document):
	def validate(self):
		self.title = 'test'
		for item in self.get("items"):
			d = frappe.new_doc("Item")
			d.item_code = item.item_code
			d.item_name = item.item_code
			d.description = item.description
			d.item_group = "Review"
			d.is_stock_item = 0
			d.is_purchase_item = 0
			d.is_sale_item = 0
			d.insert()
