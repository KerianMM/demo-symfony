import $ from 'jquery';
import Logger from './plugin/logger';

$(document).ready(function() {
    let logger = new Logger($);

    logger.log('test 1');
    logger.log('test 2');
    logger.log('test 3');
});