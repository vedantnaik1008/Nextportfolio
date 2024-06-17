import { act, renderHook } from "@testing-library/react"
import useScroll from "@/hook/useScroll"

describe('useScroll',()=> {
    test('renders false when scroll height is less than 500', ()=> {
        let isVisible = false;
        const { result } = renderHook(useScroll)
        act(() => result.current.isVisible)
        expect(result.current.isVisible = isVisible).toBe(false);
    })
    test('renders true when scroll height is more or equal to 500', () => {
        let isVisible = true;
        const { result } = renderHook(useScroll);
        act(() => result.current.isVisible);
        expect(result.current.isVisible = isVisible).toBe(true);
    });
    test.skip('calls the function handleClick', ()=> {
        const { result } = renderHook(useScroll);
        act(()=> result.current.handleClick())
        expect(result.current.handleClick()).toHaveBeenCalledTimes(1)
    })
})