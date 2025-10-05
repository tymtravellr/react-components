import { useEffect, useRef } from "react"
import Select from "../../global/select/select"
import WidgetBlock from "./widget-block"

const languages = [
    {
        title: 'English',
        value: 'en'
    },
    {
        title: 'Bengali',
        value: 'bn'
    }
]

const SettingWidget = () => {
    const ref = useRef(null)

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            console.log("ref", ref.current, e.target)
        })
    }, [])

    return (
        <div className="bg-white rounded-2xl shadow p-6 max-w-lg w-full">
            <div className="pb-3" ref={ref}>
                <h3 className="text-xl font-bold">Appearance</h3>
                <p className="text-sm text-gray-400">Set or customize your preferences for the system</p>
            </div>
            <WidgetBlock className="flex items-center justify-between">
                <div>
                    <h3 className="font-semibold text-secondary">Language</h3>
                    <p className="text-sm text-gray-400">Select the language of the platform</p>
                </div>
                <Select option={languages} />
            </WidgetBlock>
            <div className="pt-3">
                Reset To Default
            </div>
        </div>
    )
}

export default SettingWidget