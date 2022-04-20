let result = document.getElementById("result")

function clickbutton(target) {
    let target_value = target.innerHTML
    // 電卓のリセットと計算
    if (target_value == "AC") {
        result.innerHTML = "0"
    } else if (target_value == "=") {
        result.innerHTML = eval(result.innerHTML)
    } else {
        // 電卓の頭に０、四則演算が来ないように
        if (result.innerHTML == "0")
            result.innerHTML = target_value
        else if
            (result.innerHTML == "00") {
            result.innerHTML = target_value
        }
        else if
            (result.innerHTML == "+") {
            result.innerHTML = target_value

        }
        else if
            (result.innerHTML == "--") {
            result.innerHTML = `-${target_value}`

        }
        else if
            (result.innerHTML == "*") {
            result.innerHTML = target_value

        }
        else if
            (result.innerHTML == "/") {
            result.innerHTML = target_value

        }
        else if
            (result.innerHTML == ".") {
            result.innerHTML = `0.${target_value}`


        }
        else {
            // 四則演算が2つ続いたら一番後ろの演算子削除
            if
                (result.innerHTML.slice(-2) == "++") {
                result.innerHTML = result.innerHTML.slice(0, -1) + target_value;
            }
            else if
                (result.innerHTML.slice(-2) == "+-") {
                result.innerHTML = result.innerHTML.slice(0, -1) + target_value;
            }
            else if
                (result.innerHTML.slice(-2) == "+*") {
                result.innerHTML = result.innerHTML.slice(0, -1) + target_value;

            }
            else if
                (result.innerHTML.slice(-2) == "+/") {
                result.innerHTML = result.innerHTML.slice(0, -1) + target_value;

            }
            else if
                (result.innerHTML.slice(-2) == "-+") {
                result.innerHTML = result.innerHTML.slice(0, -1) + target_value;
            }
            else if
                (result.innerHTML.slice(-2) == "--") {
                result.innerHTML = result.innerHTML.slice(0, -1) + target_value;

            } else if
                (result.innerHTML.slice(-2) == "-*") {
                result.innerHTML = result.innerHTML.slice(0, -1) + target_value;

            }
            else if
                (result.innerHTML.slice(-2) == "-/") {
                result.innerHTML = result.innerHTML.slice(0, -1) + target_value;

            }
            else if
                (result.innerHTML.slice(-2) == "*+") {
                result.innerHTML = result.innerHTML.slice(0, -1) + target_value;

            }
            else if
                (result.innerHTML.slice(-2) == "*-") {
                result.innerHTML = result.innerHTML.slice(0, -1) + target_value;
            }
            else if
                (result.innerHTML.slice(-2) == "**") {
                result.innerHTML = result.innerHTML.slice(0, -1) + target_value;

            }
            else if
                (result.innerHTML.slice(-2) == "*/") {
                result.innerHTML = result.innerHTML.slice(0, -1) + target_value;

            }
            else if
                (result.innerHTML.slice(-2) == "/+") {
                result.innerHTML = result.innerHTML.slice(0, -1) + target_value;

            }
            else if
                (result.innerHTML.slice(-2) == "/-") {
                result.innerHTML = result.innerHTML.slice(0, -1) + target_value;

            }
            else if
                (result.innerHTML.slice(-2) == "/*") {
                result.innerHTML = result.innerHTML.slice(0, -1) + target_value;

            }
            else if
                (result.innerHTML.slice(-2) == "//") {
                result.innerHTML = result.innerHTML.slice(0, -1) + target_value;
            }
            else {
                result.innerHTML += target_value
            }
        }
    }
}
