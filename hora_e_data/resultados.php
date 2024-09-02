<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultados Matemáticos e Data</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        h1, h2 {
            color: #00796b;
        }
        p {
            font-size: 16px;
            margin-bottom: 10px;
        }
        .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Resultados Matemáticos e Data Atual</h1>

        <?php
        // Configurações de localidade e fuso horário
        setlocale(LC_TIME, 'pt_BR.utf8');
        date_default_timezone_set('America/Bahia');

        // Exibindo a data atual formatada
        $date = new DateTime();

        $formatter = new IntlDateFormatter(
            'pt_BR', 
            IntlDateFormatter::FULL, 
            IntlDateFormatter::MEDIUM, 
            'America/Bahia', 
            IntlDateFormatter::GREGORIAN
        );

        echo "<h2>Data Atual:</h2>";
        echo "<p>" . $formatter->format($date) . "</p>";

        // Funções matemáticas
        echo "<h2>Funções Matemáticas:</h2>";

        $number1 = 25;
        $number2 = 8;

        // Adição
        $sum = $number1 + $number2;
        echo "<p>Adição: $number1 + $number2 = $sum</p>";

        // Subtração
        $difference = $number1 - $number2;
        echo "<p>Subtração: $number1 - $number2 = $difference</p>";

        // Multiplicação
        $product = $number1 * $number2;
        echo "<p>Multiplicação: $number1 * $number2 = $product</p>";

        // Divisão
        $quotient = $number1 / $number2;
        echo "<p>Divisão: $number1 / $number2 = " . number_format($quotient, 2) . "</p>";

        // Raiz Quadrada
        $squareRoot = sqrt($number1);
        echo "<p>Raiz Quadrada de $number1 = " . number_format($squareRoot, 2) . "</p>";

        // Arredondamento
        $roundedValue = round($quotient);
        echo "<p>Valor Arredondado de $number1 / $number2 = $roundedValue</p>";

        // Função Máxima e Mínima
        $maxValue = max($number1, $number2);
        $minValue = min($number1, $number2);
        echo "<p>Máximo entre $number1 e $number2 = $maxValue</p>";
        echo "<p>Mínimo entre $number1 e $number2 = $minValue</p>";

        // Potência
        $power = pow($number1, 3);
        echo "<p>$number1 elevado ao cubo = $power</p>";?>
    </div>
</body>
</html>
