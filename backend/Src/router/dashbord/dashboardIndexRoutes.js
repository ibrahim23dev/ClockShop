const router = require('express').Router()
const { authMiddleware } = require('../../middleware/authMiddleware')
const {  get_admin_dashboard_data } = require('../../Controller/dashboard/dashboardIndexController')

router.get('/seller/get-dashboard-index-data', authMiddleware, get_admin_dashboard_data)
//router.get('/admin/get-dashboard-index-data', authMiddleware, get_admin_dashboard_data)

module.exports = router