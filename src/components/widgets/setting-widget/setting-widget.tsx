import WidgetBlock from "./widget-block"

const SettingWidget = () => {
    return (
        <div className="bg-white rounded-2xl shadow p-6 max-w-lg w-full">
            <div className="pb-3">
                <h3 className="text-xl font-bold">Appearance</h3>
                <p className="text-sm">Set or customize your preferences for the system</p>
            </div>
            <WidgetBlock>
                <div>
                    <h3 className="font-semibold text-secondary">Language</h3>
                    <p className="text-sm">Select the language of the platform</p>
                </div>
            </WidgetBlock>
            <div className="pt-3">
                Reset To Default
            </div>
        </div>
    )
}

export default SettingWidget