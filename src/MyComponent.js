import PropTypes from "prop-types";
import {Component} from "react"

// const MyComponent = (props) => {
//     let {name, children} = props;
//     return <div>
//         <h1>나의 새롭고 멋진 컴포넌트</h1>
//         <h2>안녕하세요, 제 이름은 {name} 입니다.</h2>
//         <h3>children의 값은 {children} 입니다.</h3>
//         </div>;
// };

class MyComponent extends Component {
    render() {
        let{name, children} = this.props;
        return (
            <div>
                <h1>나의 새롭고 멋진 컴포넌트</h1>
                <h2>안녕하세요, 제 이름은 {name} 입니다.</h2>   
                <h3>children의 값은 {children} 입니다.</h3> 
            </div>
        )
    }
}

// 이름값이 아무것도 설정되지 않으면 기본값을 설정할 수 있게 해주는 defaultProps.
// name값을 직접 주면 기본이름이 출력되지 않고 덮어 씌워져 다른 이름값을 출력 가능.
MyComponent.defaultProps = {
    name : "기본 이름"
}

MyComponent.propTypes = {
    name: PropTypes.string,
}

export default MyComponent;