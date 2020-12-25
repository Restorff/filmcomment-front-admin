import request from '@/utils/request'

export default {
    //1 电影列表
    getFilmByPage(current, limit) {
        return request({
            //这种拼接方式容易遗漏/字符
            // url: '/eduservice/teacher/pageTeacherCondition/' + current + "/" + limit,
            url: `/common/getFilmByPage/${current}/${limit}`,
            method: 'get',
            //后端用RequestBody接手数据时必须用data，可以把对象转换为json
            // data: teacherQuery
        })
    },
    getAllFilmsCount(fid) {
        return request({
            url: `/common/getAllFilmsCount`,
            method: 'get',
        })
    },
    getOneFilmById(fid) {
        return request({
            url: `/common/getOneFilmById/${fid}`,
            method: 'get',
        })
    },
    getCommentsById(fid) {
        return request({
            url: `/common/getComments/${fid}`,
            method: 'get'
        })
    },
    getUserById(uid) {
        return request({
            url: `/common/getUserById/${uid}`,
            method: 'get'
        })
    },

    deleteCommentById(cid) {
        return request({
            url: `/admin/deleteInfo/${cid}`,
            method: 'delete'
        })
    },

    release(film) {
        return request({
            url: `/admin/release`,
            method: 'post',
            data: film
        })
    },

    updateTeacher(teacher) {
        return request({
            url: `/eduservice/teacher/updateTeacher`,
            method: 'post',
            data: teacher
        })
    },
}