/**
 * Created by FlyingAnt on 12/22/15.
 */
import $ from 'jquery';

module.exports = {

    baseURL: () => {
        return "http://192.168.1.111:8080"
    },

    post: (url, data) => {
        return $.post(url, data)
    },

    get: (url, data) => {
        return $.get(url, data)
    },

    put: (url, data) => {
        return $.ajax({
            url: url,
            type: 'put',
            data: JSON.stringify(data)
        })
    },

    upload: (url, data) => {
        return $.ajax({
            type: 'post',
            url: url,
            processData: false,
            contentType: false,
            data: data
        })
    }

}