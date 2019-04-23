/**
 * © 2019 Liferay, Inc. <https://liferay.com>
 *
 * SPDX-License-Identifier: BSD-3-Clause
 */

import * as React from 'react';
import * as TestRenderer from 'react-test-renderer';
import ClayIcon, {ClayIconSpriteContext} from '..';

describe('ClayIcon', () => {
	it('renders', () => {
		const testRenderer = TestRenderer.create(
			<ClayIcon
				spritemap="/path/to/some/resource.svg"
				symbol="cool-icon"
			/>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});

	it('renders with context spritemap', () => {
		const testRenderer = TestRenderer.create(
			<ClayIconSpriteContext.Provider value="foo/bar.svg">
				<ClayIcon symbol="cool-icon" />
			</ClayIconSpriteContext.Provider>
		);

		expect(testRenderer.toJSON()).toMatchSnapshot();
	});
});