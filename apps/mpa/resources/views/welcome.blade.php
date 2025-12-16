<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MPA App</title>
    <link rel="stylesheet" href="http://localhost:5174/static/reset.css">
    <link rel="stylesheet" href="http://localhost:5174/static/styles.css">
</head>

<body>
    <react-app-header props="{{ json_encode($header['props']) }}">{!! $header['html'] !!}</react-app-header>
    <script src="http://localhost:5174/static/client/main.js" type="module"></script>
</body>

</html>