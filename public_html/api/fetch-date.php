<?php
require_once('../../configuration/database.php');

$response = [];

try {
//    $connect   = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
//
//    if (!$connect) {
//        throw new Exception('Failed to connect!');
//    }

    $month = date('M', strtotime('2019-09-07'));
    $day   = date('d', strtotime('2019-09-07'));

    // return a bunch of items sorted by desc
    $response['data'] = array(
        'color' => '#8393ca',
        'date' => '2019-09-07',
        'month' => $month,
        'day' => $day,
        'title' => 'React Hooks',
        'text' => 'Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Hooks are backwards-compatible.',
        'link' => 'https://reactjs.org/docs/hooks-intro.html'
    );

} catch (Exception $e){
    $response['error'] = $e->getMessage();
} catch (\Exception $e) {
    $response['error'] = $e->getMessage();
} catch (\Throwable $e) {
    $response['error'] = $e->getMessage();
} finally {
    echo json_encode($response);
}