<?php
require_once('../../configuration/database.php');

$response = [];

try {


    // LIVE CODE
//    $connect   = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
//
//    if (!$connect) {
//        throw new Exception('Failed to connect!');
//    }
//
//    $query = 'SELECT * FROM learned';
//    $result = $connect->query($query);
//
//    if ($result) {
//        $response['data'] = array();
//        while($row = mysqli_fetch_array($result)) {
//            $month = date('M', strtotime($row['date']));
//            $day   = date('d', strtotime($row['date']));
//            $response['data'][] = array(
//                'color' => $row['color'],
//                'date' => $row['date'],
//                'month' => $month,
//                'day' => $day,
//                'title' => $row['title'],
//                'text' => $row['text'],
//                'link' => $row['link']
//            );
//        }
//    }
//    else {
//        throw new Exception(mysqli_error());
//    }


    // LOCAL CODE
    $month = date('M', strtotime('2019-09-16'));
    $day   = date('d', strtotime('2019-09-16'));
    $response['data'] = array(
        [
            'color' => '#ca9283',
            'date' => '2019-09-07',
            'month' => $month,
            'day' => $day,
            'title' => 'Lexical Scope',
            'text' => 'A lexical scope in Javascript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration.',
            'link' => 'https://spin.atomicobject.com/2014/10/20/javascript-scope-closures/'
        ],
        [
            'color' => '#8393ca',
            'date' => '2019-09-07',
            'month' => $month,
            'day' => $day,
            'title' => 'React Hooks',
            'text' => 'Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. Hooks are backwards-compatible.',
            'link' => 'https://reactjs.org/docs/hooks-intro.html'
        ],
        [
            'color' => '#83ca8a',
            'date' => '2019-09-16',
            'month' => $month,
            'day' => $day,
            'title' => 'Optional Chaining',
            'text' => 'The optional chaining operator "?." permits reading the value of a property located deep within a chain of connected objects without having to expressly validate that each reference in the chain is valid...',
            'link' => 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining'
        ]
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