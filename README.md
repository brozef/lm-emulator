# Golf Launch Monitor Emulator

Node server and single-page frontend that emulates a golf launch monitor and sends ball-flight data via GSPro Open Connector socket on the same computer running the server. Front-end is accessable via any device on local network by going to http://lm-emulator.local:3000 in a browser or https://brozef.github.io/lm-emulator to redirect to your local server automatically.

Designed for testing golf simulators without needing physical hardware. Provides club selection, shot shape, power, ball speed, spin rate, spin axis, launch angles, and carry distance estimate in the browser using a basic aerodynamic physics model.


## Interface

### Club Selection
18 clubs across five categories: Woods, Hybrids, Irons, Wedges, and Putter. Each club displays its estimated maximum carry distance (100% power, straight shot) calculated by the physics model. Selecting a club immediately updates all metrics.

On narrow screens the club list collapses into a compact panel with a toggle button. Picking a club on mobile auto-collapses the panel so the shot controls are immediately visible.

| Category | Clubs |
|---|---|
| Woods | Driver, 3 Wood, 5 Wood |
| Hybrids | 3 Hybrid, 4 Hybrid |
| Irons | 3-9 Iron |
| Wedges | PW, GW (50°), SW (54°), LW (58°), LW (60°) |
| Putter | Putter |

### Shot Shape
Five shot types, each with a fixed horizontal launch angle (HLA) offset and spin modifications applied on top of the selected club's base values.

| Button | HLA | Spin Delta | Spin Axis |
|---|---|---|---|
| Straight | 0° | 0 rpm | 0° |
| Draw | -3° | --400 rpm | -15° |
| Fade | +3° | +400 rpm | +15° |
| Snap Hook | −-8° | -1,200 rpm | -45° |
| Slice | +8° | +1,200 rpm | +45° |

HLA is positive = right, negative = left (right-handed golfer convention). Spin axis is degrees of tilt from vertical; negative tilts left (draws/hooks curve left), positive tilts right (fades/slices curve right).

### Power Meter
A slider from 10% to 100% with 25 / 50 / 75 / FULL preset buttons. Reducing power scales all three physical quantities:

- **Ball speed** scales linearly: `speed = base x (power / 100)`
- **Spin rate** drops faster than speed, matching a partial swing: `spin = base x (power / 100)^1.7`
- **VLA** increases slightly at lower power to reflect reduced shaft lean and more effective loft: `vla = base + (1 - power/100) x 4°`

The estimated carry distance updates live as you drag the slider.

## Customising Club Data

All club parameters live in the `CLUBS` array near the top of the `<script>` block. Each entry has:

```js
{ cat, name, loft, vla, ball_speed, spin_rpm, spin_axis }
```

`ball_speed` is in km/h at 100% power. `spin_rpm` is positive for backspin. `spin_axis` for a straight shot should always be `0`. Carry distances in the club list are recalculated automatically from whatever values you set.

Shot shape modifiers live in `SHOT_MODS` and follow the same structure - edit `hla`, `spin_delta`, and `spin_axis` there to tune each shot type's behaviour.
