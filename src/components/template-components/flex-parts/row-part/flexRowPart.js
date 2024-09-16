import React from 'react';
import { getComponentByName } from '../../component-utils/componentFinder';
const FlexRowPart = ({ Components }) => {
    return (
        <div className="template-row">
            {Components.map((component, index) => {
                const ComponentName = component.ComponentName;
                const TheComponent = getComponentByName(ComponentName);

                return (
                    <TheComponent
                        key={index}
                        Parameters={component.Parameters} /> // Eğer Parameters belirtilmemişse varsayılan bir boş nesne gönderir.
                );
            })}
        </div>
    );
};

export default FlexRowPart;