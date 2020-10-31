import React from 'react';
import TooltipTrigger from 'react-popper-tooltip';
import 'react-popper-tooltip/dist/styles.css';

const Tooltip = ({children, tooltip, hideArrow, data, ...props}) => {

  const start = data[0].time;
  const end = data[data.length - 1].time;
  let events = [];

  for (let i = 0; i < (data.length); i++) {
    const n = (i < 1) ? 0 : (i - 1);
    if (data[i].state === 'available') {
      continue
    }
    else if (events.length > 0 && data[i].state === data[n].state && data[i].state === events[events.length - 1].state) {
      events[events.length - 1].minutes += 1;
    }
    else if ((data[i].state !== data[n].state && data[i].state !== 'available') || i === 0) {
      events.push(
        {
          minutes: 1,
          state: data[i].state
        }
        );
      }
  }

  console.log(events);
  function returnStateString(state) {
    if (state === 'unavailable') {
      return 'Unavailable'
    } 
      return 'Partially unavailable'
  }

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
        <small className='pb-1'>
          {start.stringForm} - {end.stringForm}
        </small>
        {hideArrow === false && (
          <div
            {...getArrowProps({
              ref: arrowRef,
              className: 'tooltip-arrow',
              'data-placement': placement
            })}
          />
        )}
        {events.map((e, i) =>(
          <div key={e.state + i} className='flex justify-between items-center mb-1 rounded-sm p-1 bg-gray-300'>
            <div className='flex'>
              <img src="warning.svg" width='12' height='12' alt="Outage" className='mx-1' />
              <small>
                {returnStateString(e.state)} 
              </small>
            </div>
            <small className='font-medium pr-2'>
              {e.minutes} {e.minutes > 1 ? 'minutes' : 'minute'}
            </small>
          </div>
        ))}
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
