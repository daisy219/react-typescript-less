import { AUTH_API_ROOT, HOMEWORK_API_ROOT } from '../config/index';
import http from './index';

/** 获取课本 */
export async function get_textbooks(params) {
    const res = await http.get(AUTH_API_ROOT + '/textbook/get-user-books', {params: params});
    return res.data
}

/** 获取当前选择课本信息 */
export async function get_onebook(params) {
    const res = await http.get(AUTH_API_ROOT + '/textbook/select-one', {params: params});
    return res.data
}

/** 获取当前选择章节节点 */
export async function get_child_node(params) {
    const res = await http.get(AUTH_API_ROOT + '/resourcenode/get-child-node', {params: params});
    return res.data
}

/** 获取科目信息 */
export async function get_subject(params) {
    const res = await http.get(AUTH_API_ROOT + '/schoolsubject/get-list', {params: params || {}});
    return res.data
}

/** 获取首页综合报表 */
export async function get_report(params) {
    const res = await http.get(HOMEWORK_API_ROOT + '/api/calculate-analysis/comprehensive-report', {params: params || {}});
    return res.data;
}

/** 导出首页综合报表 */
export async function export_report() {
    const url = HOMEWORK_API_ROOT + '/api/calculate-analysis/export-comprehensive-report-e';
    return url;
}

/** 获取班级信息 */
export async function get_teach_class(params) {
    const res = await http.get(AUTH_API_ROOT + '/teacherclass/get-class-list', {params: params|| {}});
    return res.data;
}

/** 获取指定班级学生 */
export async function get_student(params) {
    const res = await http.post(AUTH_API_ROOT + '/class/get-class-stu', {classid: params || {}}, 'form_data');
    return res.data;
}
