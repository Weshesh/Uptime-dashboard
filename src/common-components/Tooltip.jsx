import React from 'react';
import TooltipTrigger from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';

const Tooltip = ({children, tooltip, hideArrow, data, ...props}) => {

  const start = data[0].time;
  const end = data[data.length - 1].time;

  return (
  <TooltipTrigger
    {...props}
    tooltip={({
      arrowRef,
      tooltipRef,
      getArrowProps,
      getTooltipProps,
      placement
    }) => (
      <div
        {...getTooltipProps({
          ref: tooltipRef,
          className: 'tooltip-container'
        })}
      >
        <div class='flex'>
          {start.stringForm} - {end.stringForm}
        </div>
        {hideArrow === false && (
          <div
            {...getArrowProps({
              ref: arrowRef,
              className: 'tooltip-arrow',
              'data-placement': placement
            })}
          />
        )}
        {tooltip}
      </div>
    )}
  >
    {({getTriggerProps, triggerRef}) => (
      <span
        {...getTriggerProps({
          ref: triggerRef,
          className: 'trigger'
        })}
      >
        {children}
      </span>
    )}
  </TooltipTrigger>
)};

export default Tooltip;
